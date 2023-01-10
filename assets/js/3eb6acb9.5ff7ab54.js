"use strict";(globalThis.webpackChunk_lyrasearch_docs=globalThis.webpackChunk_lyrasearch_docs||[]).push([[8805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,r(r({ref:t},s),{},{components:n})):a.createElement(k,r({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const o={},r="Nebula",i={unversionedId:"deployment/nebula",id:"deployment/nebula",title:"Nebula",description:"Nebula is a low code tool that can deploy your Lyra data on most common providers like Cloudflare Workers, AWS Lambda and Google Cloud Functions.",source:"@site/docs/05-deployment/01-nebula.md",sourceDirName:"05-deployment",slug:"/deployment/nebula",permalink:"/deployment/nebula",draft:!1,editUrl:"https://github.com/lyrasearch/docs/tree/main/docs/05-deployment/01-nebula.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"main",previous:{title:"Deployment",permalink:"/category/deployment"},next:{title:"Text Analysis",permalink:"/category/text-analysis"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Bundle Lyra and your data",id:"bundle-lyra-and-your-data",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Deploy on Cloudflare Workers",id:"deploy-on-cloudflare-workers",level:3},{value:"Deploy on AWS Lambda",id:"deploy-on-aws-lambda",level:3},{value:"Deploy on Google Cloud Functions",id:"deploy-on-google-cloud-functions",level:3},{value:"Deploy on Microsoft Azure App Functions",id:"deploy-on-microsoft-azure-app-functions",level:3},{value:"Deploy on custom platforms",id:"deploy-on-custom-platforms",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nebula"},"Nebula"),(0,l.kt)("p",null,"Nebula is a low code tool that can deploy your Lyra data on most common providers like Cloudflare Workers, AWS Lambda and Google Cloud Functions."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"You can install Lyra globally by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using npm"',title:'"Using','npm"':!0},"npm install -g @lyrasearch/nebula\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using yarn"',title:'"Using','yarn"':!0},"yarn global add @lyrasearch/nebula\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Using pnpm"',title:'"Using','pnpm"':!0},"pnpm add -g @lyrasearch/nebula\n")),(0,l.kt)("p",null,"After that, a ",(0,l.kt)("inlineCode",{parentName:"p"},"nebula")," executable should be available. You can inspect its options by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nebula --help\n")),(0,l.kt)("h3",{id:"bundle-lyra-and-your-data"},"Bundle Lyra and your data"),(0,l.kt)("p",null,"Prepare a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," containing the basic information for your deployment."),(0,l.kt)("p",null,"The simplest file you can create is something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'version: 0.1\n\nschema:\n  title: string\n  description: string\n\ninput:\n  path: ./get-data.js\n  type: "javascript" # Can also use "json" here\n\noutput:\n  name: lyra.js\n  directory: tmp\n')),(0,l.kt)("p",null,"As you might image, the ",(0,l.kt)("inlineCode",{parentName:"p"},"schema")," section contains the same schema you would usually pass to Lyra's ",(0,l.kt)("inlineCode",{parentName:"p"},"create"),"\xa0method."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"input.path")," must point to a local JSON file or a Javascript exporting (both ESM and CJS are supported) a function. In both cases the resulting data will be the data Nebula will index."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"output")," section contains the directory and the name of the bundled file produced by Nebula."),(0,l.kt)("p",null,"When you're ready, simply run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nebula bundle lyra.yml\n")),(0,l.kt)("h3",{id:"deploy"},"Deploy"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," add a new section called ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," containing all the required information (see sections below)."),(0,l.kt)("p",null,"When you're ready, simply run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"nebula deploy lyra.yml\n")),(0,l.kt)("p",null,"The CLI will print the URL for the newly deployed function."),(0,l.kt)("p",null,"The function requires no authentication and can be invoked by using a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GET")," requests will accept the parameters on the querystring."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"POST")," request will accept the parameters int JSON request body.")),(0,l.kt)("p",null,"In both cases, the function accepts the following parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"term"),": The term to search. It is the only mandatory parameters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"limit"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"offset"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"tolerance"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"exact"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"properties"),": Parameters forwarded to Lyra's ",(0,l.kt)("inlineCode",{parentName:"li"},"search")," method.")),(0,l.kt)("h3",{id:"deploy-on-cloudflare-workers"},"Deploy on Cloudflare Workers"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," create a ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," section structured as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'deploy:\n  platform: cloudflare\n  configuration:\n    workerName: "<worker>" # Name of the worker to deploy to\n    useWorkerDomain: true # Optional, if to use custom domains for the worker\n    r2: "[bucket]" # Optional, name of R2 bucket where to store the data\n    kv: "[namespace]" # Optional, name of KV namespace where to store the data\n')),(0,l.kt)("p",null,"The following environments are required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLOUDFLARE_ACCOUNT"),": The Cloudflare account id."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLOUDFLARE_API_TOKEN"),": The Cloudflare API Token."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLOUDFLARE_R2_ACCESS_KEY_ID"),": The Cloudflare R2 key id (only if R2 is used)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CLOUDFLARE_R2_ACCESS_KEY_SECRET"),": The Cloudflare R2 key secret (only if R2 is used).")),(0,l.kt)("h3",{id:"deploy-on-aws-lambda"},"Deploy on AWS Lambda"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," create a ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," section structured as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'deploy:\n  platform: aws-lambda\n  configuration:\n    function: "<function>" # Name of the Lambda to deploy to\n    repository: "<ecrRepository>" # Name of the ECR repository where to store the Lambda image\n    s3: "[bucket]" # Optional, name of S3 bucket where to store the data\n')),(0,l.kt)("p",null,"The following environments are required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ACCOUNT_ID"),": The AWS account id."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),": The AWS key id."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),": The AWS access key."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AWS_REGION"),": The AWS region.")),(0,l.kt)("h3",{id:"deploy-on-google-cloud-functions"},"Deploy on Google Cloud Functions"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," create a ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," section structured as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'deploy:\n  platform: google-cloud\n  configuration:\n    function: "<function>" # Name of the Google Cloud Function to deploy to\n    bucket: "<bucket>" # Name of the Google Cloud Storage bucket to use\n    project: "<project>" # Name of the Google Cloud project to use\n    region: "<region>" # Name of the Google Cloud region to use\n    separateDataObject: true # Optional, if to store the data a separate object in the bucket\n')),(0,l.kt)("p",null,"The following environments are required:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GCP_CLIENT_ID"),": The Google Cloud client id."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GCP_CLIENT_SECRET"),": The Google Cloud client secret."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GCP_REFRESH_TOKEN"),": The Google Cloud oAuth2 refresh token.")),(0,l.kt)("h3",{id:"deploy-on-microsoft-azure-app-functions"},"Deploy on Microsoft Azure App Functions"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," create a ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," section structured as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'deploy:\n  platform: azure\n  configuration:\n    application: "<application>" # Name of the Azure application to use\n    function: "<function>" # Name of the Azure App Function to deploy to\n    resourceGroup: "<resourceGroup>" # Name of the Azure resource group to use\n    storageAccount: "<storageAccount>" # Name of the Azure storage account to use\n    region: "<region>" # Name of the Azure region to use\n    container: "[container]" # Optional, name of the Azure storage container where to store the data\n')),(0,l.kt)("p",null,"The Azure deployment needs the Azure CLI to be installed locally (",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/cli/azure/install-azure-cli"},"see instructions"),") and properly logged in (run ",(0,l.kt)("inlineCode",{parentName:"p"},"az login"),")."),(0,l.kt)("h3",{id:"deploy-on-custom-platforms"},"Deploy on custom platforms"),(0,l.kt)("p",null,"In the ",(0,l.kt)("inlineCode",{parentName:"p"},"lyra.yml")," create a ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy")," section structured as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"deploy:\n  platform: custom\n  configuration:\n    path: ./examples/platforms/postgresql/index.js\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"configuration.path")," must point to a Javascript file exporting the following functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"bundle"),": Used for bundling, it will receive the following arguments:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configuration"),": A Nebula configuration object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"serializedLyra"),": The bundled Lyra as a string or buffer.")),(0,l.kt)("p",{parentName:"li"},"Must return an object with the following properties:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"template"),": The updated bundled Lyra")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"hasSeparateData"),": Optional, if the bundle should output the data as separate JSON file.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"afterBuild"),": An optional async callback which should be invoked after the bundle has been written."),(0,l.kt)("p",{parentName:"li"},"It will receive the following arguments:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spinner"),": A ",(0,l.kt)("a",{parentName:"li",href:"https://npmjs.com/ora"},"ora")," spinner object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"bundlePath"),": The path of the written bundle."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"deploy"),": Used for deploying, it will receive the following arguments:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spinner"),": A ",(0,l.kt)("a",{parentName:"li",href:"https://npmjs.com/ora"},"ora")," spinner object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sourcePath"),": The full path of the bundle file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configuration"),": A Nebula configuration object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rootDirectory"),": The absolute root path where all produced files are stored."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"undeploy"),": Used for undeploying, it will received the following arguments:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"spinner"),": A ",(0,l.kt)("a",{parentName:"li",href:"https://npmjs.com/ora"},"ora")," spinner object"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"configuration"),": A Nebula configuration object")))),(0,l.kt)("p",null,"All functions can return a promis."))}d.isMDXComponent=!0}}]);