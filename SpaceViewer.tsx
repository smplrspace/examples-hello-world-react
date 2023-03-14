import * as React from 'react';
import { FC, useEffect } from 'react';
import { loadSmplrJs } from '@smplrspace/smplr-loader';

export const SpaceViewer: FC = () => {
  useEffect(() => {
    // we recommend using the default value 'esm' in your code but stackblitz required 'umd'
    loadSmplrJs('umd')
      .then((smplr) => {
        const space = new smplr.Space({
          spaceId: 'edb2ebaa-47ea-4e54-af0d-cf543328bdb0',
          clientToken: 'pub_eb760fee77634cdab2fe31146fc371c2',
          containerId: 'test',
        });
        space.startViewer({
          preview: true,
          onReady: () => console.log('Viewer is ready'),
          onError: (error) => console.error('Could not start viewer', error),
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="smplr-wrapper">
      <div id="test" className="smplr-embed"></div>
    </div>
  );
};
