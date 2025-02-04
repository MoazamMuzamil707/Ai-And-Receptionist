const ViewText = ({ col = 12, text = "" }) => {
    return (
        <div className={`col-md-${col} mb-3`} id="utility_footer">
            <p
                style={{
                    margin: "0 0 10px",
                    padding: "10px 0px 10px 10px",
                    backgroundColor: "#eee",
                    fontWeight: 500,
                    borderRadius: "8px",
                }}
            >
                <span style={{ color: "initial" }}>
                    <b>Notes:</b>
                    <br />
                    {/* {text || "No additional notes available."} */}
                    <p
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </span>
            </p>
        </div>
    );
};

export default ViewText;
