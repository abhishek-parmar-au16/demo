import React from 'react'
import { Box } from '@mui/material'


function SectionContainer({ containerBackground = "transparent", component = 'section', children }) {
    return <Box sx={{
        backgroundColor: containerBackground
    }}>
        <Box component={component} sx={{
            padding: "120px 0px 0px",
            maxWidth: "1100px",
            margin: 'auto'
        }}>
            {children}
        </Box>
    </Box>
}

export default SectionContainer;