const results = {
    distance: 0,
    timeOfFlight: 0,
    azimuth: 0,
    elevation: 0,
}

export default function Results() {
    return (
        <>
            <div className="w-2/6 h-full rounded-xl mx-auto my-auto flex items-center justify-center">
                <div className="bg-neutral-900 h-119 max-h-screen w-full rounded-xl border border-neutral-800 flex flex-col-reverse justify-end items-stretch mx-5">
                    <div className="w-full h-1/12 flex flex-row justify-between items-start">
                        <p className="hover:text-white transition-colors w-1/3 text-left ml-10 text-xl">Distance</p>
                            <span className="text-neutral-500 w-1/3 text-right mr-10 text-xl">
                                {results.distance !== null ? `${results.distance.toFixed(2)} studs` : '1754 studs'}
                            </span>
            </div>
          <div className="w-full h-1/12 flex flex-row justify-between items-start">
            <p className="hover:text-white transition-colors w-1/3 text-left ml-10 text-xl">Time of flight</p>
            <span className="text-neutral-500 w-1/3 text-right mr-10 text-xl">
              {results.timeOfFlight !== null && !isNaN(results.timeOfFlight) ? `${results.timeOfFlight.toFixed(2)}s` : '4.32s'}
            </span>
          </div>
          <div className="w-full h-1/12 flex flex-row justify-between items-start">
            <p className="hover:text-white transition-colors w-1/3 text-left ml-10 text-xl">Azimuth</p>
            <span className="text-neutral-500 w-1/3 text-right mr-10 text-xl">
              {results.azimuth !== null ? results.azimuth.toFixed(2) : '152.56'}
            </span>
          </div>
          <div className="w-full h-1/12 flex flex-row justify-between items-start mt-5">
            <p className="hover:text-white transition-colors w-1/3 text-left ml-10 text-xl">Elevation</p>
            <span className="text-neutral-500 w-1/3 text-right mr-10 text-xl">
              {results.elevation !== null && !isNaN(results.elevation) ? results.elevation.toFixed(2) : '?'}
            </span>
          </div>
        </div>
      </div>
        </>
    )
}