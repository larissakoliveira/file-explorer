import _ from 'lodash';
import cssFileIcon from '../assets/cssFile.svg';
import defaultFileIcon from '../assets/defaultFile.svg';
import gitFileIcon from '../assets/gitFile.svg';
import imageFileIcon from '../assets/imageFile.svg';
import jsFileIcon from '../assets/jsFile.svg';
import jsonFileIcon from '../assets/jsonFile.svg';
import readmeFileIcon from '../assets/readmeFile.svg';
import yarnFileIcon from '../assets/yarnFile.svg';
import htmlFileIcon from '../assets/htmlFile.svg';

const getFileIcon = (fileName: string): string => {
  const extension = _.last(fileName.split('.'))?.toLowerCase();
    
    switch (extension) {
      // Configuration files
      case 'json':
        return jsonFileIcon;
      case 'gitignore':
        return gitFileIcon;
      
      // Documentation
      case 'md':
        return readmeFileIcon;
      
      // Web files
      case 'html':
        return htmlFileIcon;
      case 'css':
        return cssFileIcon;
      case 'js':
        return jsFileIcon;
      
      // Images
      case 'svg':
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'ico':
      case 'gif':
        return imageFileIcon;
      
      // Package managers
      case 'lock':
        return yarnFileIcon;
      
      default:
        return defaultFileIcon;
    }
  };
  
  export default getFileIcon;