import { createAjaxWithCredentials } from '../utils/ajax';
import {
  createRestProvider,
  IRequestContext,
} from '../utils/restProvider';

const restProvider = createRestProvider(createAjaxWithCredentials());

export interface IPreviewApiKey {
  readonly api_key: string;
  readonly expiresAt: string;
}

export const getPreviewApiKey = (authToken: string): Promise<IPreviewApiKey> => {
  const requestContext: IRequestContext = {
    authToken: authToken,
  };

  // TODO: get project id from URL
  const url = `https://qa-draft.global.ssl.fastly.net/api/project-management/0a657fe4-a314-00ac-e539-81e78251686c/keys/content-management-api`;

  return restProvider.post(url, null, requestContext);
};