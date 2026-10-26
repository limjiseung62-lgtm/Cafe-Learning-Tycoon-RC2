import { webAssets } from './webAssetCatalog.js?v=2.0.0-rc.2-746e69824716';
export function webAsset(file) { return webAssets[file]?.file ?? file; }
export { webAssets };
