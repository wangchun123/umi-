
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'myapp',
        dll: false,
      }],
    ],
    // routes: [
    //     { path: '/', component: '../layouts/index',
    //         routes:[
    //           { path: '/contractSigning', component: './contractSigning/contractSigning'},
    //           { path: '/', component: './relationship/relationship'},
    //           { path: '/suspiciousEvents', component: './suspiciousEvents/suspiciousEvents'},
    //           { path: '/404', component: './404'},
    //         ]
    //     },
    //   ],
      
  }
  