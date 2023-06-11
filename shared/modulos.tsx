const teste = [
  {
    id: 1,
    name: 'Comece por aqui',
  },
  {
    id: 2,
    name: 'Docker',
    totalProgress: "8/10",
    isFinished: false,
    classes: [
      {
        id: 2,
        name: 'Começando do zero',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 10,
        isFinished: true,
        sections: [
          {
            id: 1,
            name: 'Primeiros passos',
            classId: 227,
            videoProgress: null,
        
            imgSrc:
              'https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fbird-87900.PNG?alt=media&token=7d49b45e-92c5-40c8-92c3-2dad802c9843',
            videoSrc:
              'https://uploads.overwolf.com/owclient/discord/2020/06/12/99589567-c45b-4b3d-b8c6-3f0aee554dde.mp4',
            videoName: 'SacanagemGOSTOSA',
          },
          {
            id: 2,
            name: 'Teoria vs Pratica',
            classId: 227,
            videoProgress: null,
        
            imgSrc:
              'https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/Images%2Fgutarist.PNG?alt=media&token=5d0f18aa-f024-41dc-95a4-7a777e861d39',
            videoSrc:
              'https://firebasestorage.googleapis.com/v0/b/videoblog-8d7a7.appspot.com/o/video%2FGuitarist%20-%20139.mp4?alt=media&token=ded34be1-5e13-4ca3-9175-1aaf7dc4000a',
            videoName: 'Jimmy Hendrix is the best guitarist in history',
          },
        ]

      },
      {
        id: 3,
        name: 'Iniciando com Docker',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 20,
        isFinished: false,
      },
      {
        id: 4,
        name: 'Trabalhando com imagens',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 30,
        isFinished: false,
      },
      {
        id: 5,
        name: 'Networks',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 40,
        isFinished: false,
      },
      {
        id: 6,
        name: 'Colocando em prática',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 50,
        isFinished: false,
      },
      {
        id: 7,
        name: 'Otimizando imagens',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 60,
        isFinished: false,
      },
      {
        id: 8,
        name: 'Docker-compose',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: false,
      },
      {
        id: 9,
        name: 'Desafio',
        moduleId: 2,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
    ],
  },
  {
    id: 3,
    name: 'Padrões e técnicas avançadas com Git e Github',
    totalProgress: "8/10",
    isFinished: true,
    classes: [
      {
        id: 10,
        name: 'Introdução',
        moduleId: 3,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
      {
        id: 11,
        name: 'Iniciando com Gitflow',
        moduleId: 3,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
      {
        id: 12,
        name: 'Assinatura de commits',
        moduleId: 3,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
      {
        id: 13,
        name: 'PRs e Code Review',
        moduleId: 3,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
      {
        id: 14,
        name: 'SemVer e Conventional Commits',
        moduleId: 3,
        totalTime: '10:15',
        totalProgress: 70,
        isFinished: true,
      },
    ],
  },
  // {
  //   id: 4,
  //   name: 'Integração contínua',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 5,
  //   name: 'Kubernetes',
  //   totalProgress: "8/10",
  //   isFinished: false,
  //   classes: [],
  // },
  // {
  //   id: 6,
  //   name: 'Service Mesh com Istio',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 7,
  //   name: 'API Gateway com Kong e Kubernetes',
  //   totalProgress: "8/10",
  //   isFinished: false,
  //   classes: [],
  // },
  // {
  //   id: 8,
  //   name: 'Observabilidade',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 9,
  //   name: 'Introdução a OpenTelemetry',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 10,
  //   name: 'Terraform',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 11,
  //   name: 'Ansible',
  //   totalProgress: "8/10",
  //   isFinished: true,
  //   classes: [],
  // },
  // {
  //   id: 12,
  //   name: 'GitOps',
  // },
  // {
  //   id: 13,
  //   name: 'Deploy nas Cloud Providers',
  // },
  // {
  //   id: 14,
  //   name: 'Fundamentos da arquitetura de software',
  // },
  // {
  //   id: 15,
  //   name: 'Comunicação entre sistemas',
  // },
  // {
  //   id: 16,
  //   name: 'SOLID Express',
  // },
  // {
  //   id: 17,
  //   name: 'Domain Driven Design',
  // },
  // {
  //   id: 18,
  //   name: 'DDD Modelagem Tática e Patterns',
  // },
  // {
  //   id: 19,
  //   name: 'Event Storming na Prática',
  // },
  // {
  //   id: 20,
  //   name: 'Arquitetura hexagonal',
  // },
  // {
  //   id: 21,
  //   name: 'Clean Architecture',
  // },
  // {
  //   id: 22,
  //   name: 'Sistemas monolíticos',
  // },
  // {
  //   id: 23,
  //   name: 'Arquitetura baseada em microsserviços',
  // },
  // {
  //   id: 24,
  //   name: 'API Gateway',
  // },
  // {
  //   id: 25,
  //   name: 'RabbitMQ',
  // },
  // {
  //   id: 26,
  //   name: 'Apache Kafka',
  // },
  // {
  //   id: 27,
  //   name: 'Autenticação e Keycloak',
  // },
  // {
  //   id: 28,
  //   name: 'Arquitetura do projeto prático - Codeflix',
  // },
  // {
  //   id: 29,
  //   name: 'Projeto prático - React ( Front-end )',
  // },
  // {
  //   id: 30,
  //   name: 'Projeto prático - .Net ( Back-end )',
  // },
  // {
  //   id: 31,
  //   name: 'Projeto prático - TypeScript ( Back-end )',
  // },
  // {
  //   id: 32,
  //   name: 'Projeto prático - PHP ( Back-end )',
  // },
  // {
  //   id: 33,
  //   name: 'Projeto prático - Java ( Back-end )',
  // },
  // {
  //   id: 34,
  //   name: 'Projeto prático - Python ( Back-end )',
  // },
  // {
  //   id: 35,
  //   name: 'Microsserviço de Encoder de Vídeo com Go Lang',
  // },


];

export default teste;
