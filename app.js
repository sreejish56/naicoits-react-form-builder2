import React from "react";
import ReactDOM from "react-dom";
import DemoBar from "./demobar";
// eslint-disable-next-line no-unused-vars
import FormBuilder, { Registry } from "./src/index";
import * as variables from "./variables";

// Add our stylesheets for the demo.
require("./scss/application.scss");

const url = "/api/formdata";
const saveUrl = "/api/formdata";

const sampleMediaSource = [
  {
    id: "3619233a-97ac-4211-bf11-3b8536d11be5",
    fileName: "1690280606996-abccc1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690280606996-abccc1.jpg",
  },
  {
    id: "62f81f70-c731-4bed-858a-22bebd352f48",
    fileName: "1690279329910-download1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690279329910-download1.jpg",
  },
  {
    id: "f50c2686-da01-4d40-9a4e-0c6860eb64ff",
    fileName: "1690267807441-download1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690267807441-download1.jpg",
  },
  {
    id: "7ecfab1c-bba0-4611-8cc4-3fcbdbde8c15",
    fileName: "1690188715101-test8.pdf",
    contentType: "application/pdf",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690188715101-test8.pdf",
  },
  {
    id: "0c082024-018c-4c54-b90e-e39b6f8baafa",
    fileName: "1690184990785-Free_Test_Data_10MB_WAV.wav",
    contentType: "audio/wav",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690184990785-Free_Test_Data_10MB_WAV.wav",
  },
  {
    id: "4907833f-da71-4f97-9bc3-800ca8f0d570",
    fileName: "1690184443508-sample-mp4-file.mp4",
    contentType: "video/mp4",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690184443508-sample-mp4-file.mp4",
  },
  {
    id: "7d8f04bf-308a-4c63-a80b-36e376ad9386",
    fileName: "1690182157076-download1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690182157076-download1.jpg",
  },
  {
    id: "8a02dd05-964d-4fd3-aecb-6c3c6b6a513f",
    fileName: "1690182143437-abccc1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690182143437-abccc1.jpg",
  },
  {
    id: "8b9d15ef-9bff-4232-83ea-f90f39c03245",
    fileName: "1690181905491-abccc1.jpg",
    contentType: "image/jpeg",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1690181905491-abccc1.jpg",
  },
  {
    id: "e724ddbd-ebc3-4eca-9cef-6cc538fd5893",
    fileName: "1689943627674-file_example_WAV_2MG.wav",
    contentType: "audio/wav",
    url: "https://pms-uploads.s3.us-east-1.amazonaws.com/pms-dev/uploads/1689943627674-file_example_WAV_2MG.wav",
  },
];

const TestComponent = () => <h2>Hello</h2>;

// const MyInput = React.forwardRef((props, ref) => {
//   const { name, defaultValue, disabled } = props;
//   return (
//     <>
//       <label style={{ marginRight: '1rem' }}><b>{ props.data.label }</b></label>
//       <input ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />;
//     </>
//   );
// });

// Registry.register('MyInput', MyInput);
// Registry.register('TestComponent', TestComponent);

// const items = [{
//     key: 'Header',
//   }, {
//     key: 'TextInput',
//   }, {
//     key: 'TextArea',
//   }, {
//     key: 'RadioButtons',
//   }, {
//     key: 'Checkboxes',
//   }, {
//     key: 'Image',
//   }, {
//     key: 'Video',
//   },
//   {
//     key: 'FieldSet',
//     label:"Field Set",
//     name:"Field Set",

//   },
//   {
//     group_name: 'Multi Column Row',
//     key: 'TwoColumnRow'
//   },
//   {
//     group_name: 'Multi Column Row',
//     key: 'ThreeColumnRow'
//   },
//   {
//     group_name: 'Multi Column Row',
//     key: 'FourColumnRow',
//     element: 'MultiColumnRow',
//   },
//   {
//     group_name: 'Multi Column Row',
//     key: 'FiveColumnRow',
//     element: 'MultiColumnRow',
//   },
//   {
//     group_name: 'Multi Column Row',
//     key: 'SixColumnRow',
//     element: 'MultiColumnRow',
//   },
//   {
//     group_name: 'Custom Element',
//     key: 'TestComponent',
//     element: 'CustomElement',
//     component: TestComponent,
//     type: 'custom',
//     field_name: 'test_component',
//     name: 'Something You Want',
//     icon: 'fa fa-cog',
//     static: true,
//     props: { test: 'test_comp' },
//     label: 'Label Test',
//   },
//   {
//     group_name: 'Custom Element',
//     key: 'MyInput',
//     element: 'CustomElement',
//     component: MyInput,
//     type: 'custom',
//     forwardRef: true,
//     bare: true,
//     field_name: 'my_input_',
//     name: 'My Input',
//     icon: 'fa fa-cog',
//     props: { test: 'test_input' },
//     label: 'Label Input',
//   },
// ];

// const items = [
//   {
//     key: "Image",
//     handleUpload: (file, callback) => {
//       const fileReader = new FileReader();
//       fileReader.onload = function (fileLoadedEvent) {
//         callback(fileLoadedEvent.target.result);
//       };
//       fileReader.readAsDataURL(file);
//     },
//     handleMediaChoose: (file, callback) => {
//       callback(file?.url, file?.id, file?.cover);
//     },
//   },
//   {
//     key: "Video",
//     handleUpload: (file, callback) => {
//       const fileReader = new FileReader();
//       fileReader.onload = function (fileLoadedEvent) {
//         callback(fileLoadedEvent.target.result);
//       };
//       fileReader.readAsDataURL(file);
//     },
//     handleMediaChoose: (file, callback) => {
//       callback(file?.url, file?.id, file?.cover);
//     },
//   },
//   {
//     key: "TwoColumnRow",
//   },
// ];

const App = () => (
  <FormBuilder.ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale="en"
    saveAlways={false}
    //toolbarItems={items}
    imageMediaSource={sampleMediaSource.filter((row) =>
      row.contentType.includes("image")
    )}
    videoMediaSource={sampleMediaSource.filter(
      (row) => !row.contentType.includes("image")
    )}
  />
);

ReactDOM.render(<App />, document.getElementById("form-builder"));

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById("demo-bar")
);
