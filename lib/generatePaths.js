const fg = require('fast-glob');
const path = require('path')
const slugify = require('@sindresorhus/slugify');

const cadencePages = fg.sync(path.resolve(process.cwd(), `content/cadence/docs/**/*.{md, mdx}`));
const goSDKPages =  fg.sync(path.resolve(process.cwd(), `content/flow-go-sdk/docs/**/*.{md, mdx}`));


const cadencePaths = cadencePages.map(p => {
  const path = p
    .replace(`${process.cwd()}/content/cadence/docs`, '')
    .replace(/(.md|.mdx)$/, '')

  const cadencePath = 'cadence'.concat(path)  

  return {
    params: {
      markdown: [...cadencePath.split("/").filter(empty => empty).map(slugify)]
    }
  }
})

const goSDKPaths = goSDKPages.map(p => {
  const path = p
    .replace(`${process.cwd()}/content/flow-go-sdk/docs`, '')
    .replace(/(.md|.mdx)$/, '')

  
  const goSDKPath = 'flow-go-sdk'.concat(path)  
    
  return {
    params: {
      markdown: [...goSDKPath.split("/").filter(empty => empty).map(slugify)]
    }
  }
})

export default function generatePaths() {
  return [...cadencePaths, ...goSDKPaths];
}