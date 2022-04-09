const viewportContainer = () => {
    return {    
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
    }
}

const absolutePositioning = (top, right, bottom, left, width, height) => {
    return {
        position: "absolute",
        top: top,
        right: right,
        bottom: bottom,
        left: left,
        width: width,
        height: height,
    }
}

const flexPositioning = (justify = "center", align = "center", width, height) => {
    return{
        flex: 1,
        justifyContent: "center",//justify,
        alignItems: "center",//align,
        width: "100%",//width,
        height: "100%",//height
    }
}

export {
    viewportContainer,
    absolutePositioning,
    flexPositioning
}