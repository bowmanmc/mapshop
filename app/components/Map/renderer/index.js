import React from 'react';

import DotMapRenderer from './DotMapRenderer';


export default {

    render: function(project, basemap, data, mapData, mapInfo) {

        if (data.renderType === 'dot') {
            return DotMapRenderer.render(project, basemap, data, mapData, mapInfo);
        }
    }
};
