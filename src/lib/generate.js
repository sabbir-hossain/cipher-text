
export const generateInput = (className="", id=null, attributeData, dataList={}) => ({
  name: `input.${className}`,
  attributes: {
    id,
    placeholder: attributeData?.placeholder || "",
    maxlength:  attributeData?.maxlength || 0,
    size:  attributeData?.size || 0,
    ...dataList
  }
});

export const generateInputList = (length=0, className="", options = {}) =>  Array.from({length}).map((_, input) => generateInput(
  className, 
  `${className}-${options?.value || ""}${input + 1}`,
  options?.attributeData,
  options?.dataList.reduce( (total, {key, valueFunc}) => ({...total, [`data-${key}`]: valueFunc({_i: input})}), {})
) );