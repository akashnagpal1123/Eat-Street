

const Shimmer = () => {
    return (
        <>
            <h1>Loading Shimmer UI .....</h1>
            <div className="wrapper">
                <div className="shimmer-cont">
                    {Array(10)
                        .fill("")
                        .map((e,index) => (
                            <div key =
                            {index} className="card">
                                <div className="shimmerBG media"></div>
                                <div className="p-32">
                                    <div className="shimmerBG title-line"></div>
                                    <div className="shimmerBG title-line end"></div>
                                    <div className="shimmerBG content-line m-t-24"></div>
                                    <div className="shimmerBG content-line"></div>
                                    <div className="shimmerBG content-line"></div>
                                    <div className="shimmerBG content-line"></div>
                                    <div className="shimmerBG content-line end"></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Shimmer;