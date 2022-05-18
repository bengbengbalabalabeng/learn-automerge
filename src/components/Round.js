

const Round = ({info}) => {

    return (
        <>
            <div style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                opacity: 0.2,
                left: info.clientX - 23,
                top: info.clientY - 22,
                position: "absolute",
                backgroundColor: 'red',
                display: info.enabled ? 'block' : "none"
            }}>
            </div>
        </>
    )
}

export default Round