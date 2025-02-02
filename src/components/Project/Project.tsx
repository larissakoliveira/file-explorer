let directoryTree = {
    id: "0eab8660-3735-4cde-af38-3724536fb409",
    type: "project",
    name: "my project",
    children: [
      {
        id: "19515e30-5f39-4a59-bd22-7497ae8b2de9",
        type: "folder",
        name: "config",
        children: [
          {
            id: "37bab640-1139-40a5-8ec3-28465310e868",
            type: "file",
            name: "webpack.config.js",
          },
        ],
      },
      {
        id: "9886a179-2f55-4b5e-a38d-16476494071f",
        type: "folder",
        name: "public",
        children: [
          {
            id: "763a5cfd-36a5-40f5-8e0c-bb64bb2900c4",
            type: "file",
            name: "favicon.ico",
          },
          {
            id: "3e0ecc06-577f-4e43-b645-61f9a8fb418e",
            type: "file",
            name: "index.html",
          },
        ],
      },
      {
        id: "99f923c2-17ef-48b0-8300-ae5b702f89b5",
        type: "folder",
        name: "src",
        children: [
          {
            id: "96a41d27-7009-4bb8-b723-a2b6850c2b4c",
            type: "file",
            name: "App.css",
          },
          {
            id: "e11759b2-1081-405f-894c-2de8b12f31d4",
            type: "file",
            name: "App.js",
          },
          {
            id: "b8d846e1-1057-402b-8859-24768a62d0c4",
            type: "file",
            name: "index.css",
          },
          {
            id: "ce2c5a46-71f0-4124-b712-30e81e458f69",
            type: "file",
            name: "index.js",
          },
          {
            id: "46c0366b-b258-4983-b757-c0e1e8ce0065",
            type: "file",
            name: "logo.svg",
          },
          {
            id: "a86d15e1-2ed0-4877-aa22-4721b6ca000d",
            type: "folder",
            name: "components",
            children: [
              {
                id: "cac67386-9bfe-414c-bc5f-1918fb4dbb41",
                type: "file",
                name: "Button.css",
              },
              {
                id: "e9e5cf12-4d63-44e3-85cf-876b7604e540",
                type: "file",
                name: "Button.js",
              },
            ],
          },
          {
            id: "99870519-538a-4a24-bb52-51e59781f0d7",
            type: "folder",
            name: "helpers",
            children: [
              {
                id: "af8fd269-261b-48ba-b8d9-30dfc90d42ec",
                type: "file",
                name: "analytics.js",
              },
              {
                id: "7a5a3147-6a1d-4906-8185-1d9488c9913b",
                type: "file",
                name: "validation.js",
              },
            ],
          },
        ],
      },
      {
        id: "c2854bbe-a13e-4c15-8348-33b5429e023f",
        type: "file",
        name: ".env.development",
      },
      {
        id: "8e6ad94c-28d3-43d4-8176-35eb91f330b2",
        type: "file",
        name: ".gitignore",
      },
      {
        id: "1a3674cb-5612-4db7-9262-6c8e562d1d84",
        type: "file",
        name: ".node-version",
      },
      {
        id: "f1a68be9-73ad-4fc3-81d2-00600fbdf016",
        type: "file",
        name: "CONTIBUTING.md",
      },
      {
        id: "5d245f41-4ca2-4198-86c2-0759b89206cf",
        type: "file",
        name: "package.json",
      },
      {
        id: "189e0125-6c97-4828-8544-c3832a141d5d",
        type: "file",
        name: "README.md",
      },
      {
        id: "78676c77-0298-4ab2-a2c7-aa62d189071a",
        type: "file",
        name: "yarn.lock",
      },
    ],
  };
  
  const Project = () => {
    return (
        <>
            <p>{directoryTree.name}</p>
        </>
    );
};

export default Project;