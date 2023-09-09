import axios from 'axios'; 

export async function loadLoaclMd(filePath) {
    const response = await axios.get(filePath);
    return response
}

export function parseKeyValueString(inputString) {
    const lines = inputString.split('\n');
    const keyValueObject = {};
  
    lines.forEach((line) => {
        // 使用正则表达式匹配键值对
        const match = line.match(/^\s*([\w-]+)\s*:\s*(.*)\s*$/);
    
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim();
            keyValueObject[key] = value;
        }
    });
  
    return keyValueObject;
}