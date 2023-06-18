import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { pautaformaApi } from '../services/pautaforma';
import { useToast } from '@chakra-ui/react';

interface ICoursesContextData {
  modules: IModule[];
  handleChangeCurrentClass: ({
    id,
    name,
    module,
  }: {
    id: number;
    name: string;
    module: string;
  }) => void;
  currentClass: ICurrentClass | undefined;
  handleChangeVideo: (id: number) => void;
  isPlaying: IPlaying | undefined;
}

interface IProgress {
  entityId: number;
  progress: number;
  isFinished: boolean;
}
interface IVideo {
  duration: number;
  id: number;
  mimyType: string;
  size: number;
  summary: any;
  tumblnailPath: string;
}
interface ISection {
  id: number;
  name: string;
  classId: number;
  progress: IProgress;
  module: string;
  video: IVideo;
}

interface IModule {
  id: number;
  name: string;
  imgSrc?: string;
  moduleId: number;
  progress: IProgress;
  classes: IClasse[];
}

interface IClasse {
  id: number;
  name: string;
  imgSrc?: string;
  moduleId: number;
  progress: IProgress;
  sections: ISection[];
}

interface IPlaying {
  id: number;
  duration: number;
  mimeType: string;
  size: number;
  path: string;
  thumbnailPath: string;
  summary: string;
  name: string;
}

interface ICurrentClass {
  name: string;
  sections: ISection[];
  module: string;
  section: string | undefined;
}

const CoursesContext = createContext<ICoursesContextData>(
  {} as ICoursesContextData
);

export function CoursesProvider(props: any) {
  const [modules, setModules] = useState<IModule[]>([]);
  const [currentClass, setCurrentClass] = useState<ICurrentClass>();
  const [isPlaying, setIsPlaying] = useState<IPlaying>();
  const toast = useToast();

  console.log(currentClass,'CURRENTCLASS')

  console.log(currentClass, 'currentclass');
  console.log(isPlaying, 'isplaying');

  const MODULES_URL = '/module?relations=classes';
  const CLASSES_URL = 'class?relations=sections';
  const SECTIONS_URL = '/account-config/assignee';

  const showToast = (type: 'success' | 'error', message: string) => {
    console.log(message, 'message no toast');
    toast({
      title: message || 'Erro ao carregar dados',
      status: type,
      position: 'top-left',
      duration: 5000,
      isClosable: true,
    });
  };

  async function getModules() {
    pautaformaApi
      .get<IModule[]>(MODULES_URL)
      .then((response) => {
        setModules(response.data);
      })
      .catch((err) => {
        console.log(err);
        showToast('error', err?.data?.message);
      });
  }

  useEffect(() => {
    getModules();
  }, []);

  async function getVideo(id: number) {
    pautaformaApi
      .get(`section/${id}/video`)
      .then((response) => {
        const section = currentClass?.sections?.find(
          (section) => section.id === id
        );
        setIsPlaying({
          ...response.data,
          name: section?.name
        });
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        showToast('error', err?.response?.data?.message);
      });
  }

  async function getClasse({
    id,
    name,
    module,
  }: {
    id: number;
    name: string;
    module: string;
  }) {
    pautaformaApi
      .get<ISection[]>(`section?filters[class_id]=${id}&relations=video`)
      .then((response) => {
        setCurrentClass({
          name: name,
          sections: response.data,
          module: module,
          section: undefined,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        showToast('error', err?.respose?.data);
      });
  }

  const handleChangeCurrentClass = ({
    id,
    name,
    module,
  }: {
    id: number;
    name: string;
    module: string;
  }) => {
    return getClasse({ id, name, module });
  };

  const handleChangeVideo = (id: number) => {
    return getVideo(id);
  };

  const handleTimeUpdate = ({ id, actualTime, totalTime }: any) => {
    const progress = (actualTime / totalTime) * 100;
    return;
  };

  const handleVideoEnd = ({ id }: any) => {
    return;
  };

  return (
    <CoursesContext.Provider
      value={{
        modules,
        handleChangeCurrentClass,
        currentClass,
        handleChangeVideo,
        isPlaying,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
}

export function useCourses() {
  const context = useContext(CoursesContext);

  return context;
}
