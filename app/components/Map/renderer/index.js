import React from 'react';

import DotMapRenderer from './DotMapRenderer';
import ChoroplethMapRenderer from './ChoroplethMapRenderer';


export default {

    render: function(project, basemap, data, mapData, mapInfo) {
        if (data.renderType === 'dot') {
            return DotMapRenderer.render(project, basemap, data, mapData, mapInfo);
        }
        else {
            return ChoroplethMapRenderer.render(project, basemap, data, mapData, mapInfo);
        }
    }
};
