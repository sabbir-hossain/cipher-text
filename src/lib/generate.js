
// export const generateInput = (className="", id=null, attributeData, dataList=[]) => ({
//   name: `input.${className}`,
//   attributes: {
//     id,
//     placeholder: attributeData?.placeholder || "",
//     maxlength:  attributeData?.maxlength || 0,
//     size:  attributeData?.size || 0,
//     ...dataList.map( ({key, value}) => ( {[key]: value})   )
//   }
// });

export const generateInput = (className="", id=null, attributeData, dataList={}) => ({
  name: `input.${className}`,
  attributes: {
    id,
    placeholder: attributeData?.placeholder || "",
    maxlength:  attributeData?.maxlength || 0,
    size:  attributeData?.size || 0,
    ...dataList
    // ...dataList.reduce( (total, {key, value}) => ({...total,...{[`data-${key}`]: value}}), {})
  }
});

export const generateInputList = (length=0, className="", options = {}) =>  Array.from({length}).map((_, input) => generateInput(
    className, 
    `${className}-${options?.value || ""}${input + 1}`,
    options?.attributeData,
    ...options?.dataList.reduce( (total, {key, value}) => ({...total,...{[`data-${key}`]: `${value || ""}${input + 1}`}}))
    // [{ key: "index", value: `${options?.value || ""}${input + 1}` }]
  ) );