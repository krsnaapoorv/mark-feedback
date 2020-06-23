import React, { Component } from 'react'
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'

class Feedback extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <ImageEditor
                    className = "overlap"
                    includeUI={{
                    loadImage: {
                        path: '/sample.png',
                        name: 'SampleImage'
                    },
                    menu: ['text','draw'],
                    uiSize: {
                        height: '600px'
                    },
                    menuBarPosition: 'bottom'
                    }}
                    cssMaxHeight={500}
                    cssMaxWidth={700}
                    selectionStyle={{
                    cornerSize: 20,
                    rotatingPointOffset: 70
                    }}
                    usageStatistics={true}
                />
            </div>
        )
    }
}


export default Feedback
