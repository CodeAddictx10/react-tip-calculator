import React from "react";

export const Result = ({
    result,
    resetFormFC,
}: {
    result: { tip: number; total: number };
    resetFormFC: Function;
}) => {
    return (
        <section className="bg-very-dark-cyan h-fit lg:h-full border-2 border-white py-10  px-6 lg:px-8 rounded-2xl lg:rounded-lg mt-10 lg:mt-0">
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col">
                    <span className="block text-white font-bold text-lg">
                        Tip Amount
                    </span>
                    <span className="block text-light-grayish-cyan">
                        &#47; person
                    </span>
                </div>
                <span className="block text-primary text-4xl font-bold">
                    &#36;{result.tip ? result.tip : "0.00"}
                </span>
            </div>
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col">
                    <span className="block text-white font-bold text-lg">
                        Total
                    </span>
                    <span className="block text-light-grayish-cyan">
                        &#47; person
                    </span>
                </div>
                <span className="block text-primary text-4xl font-bold">
                    &#36;{result.total ? result.total : "0.00"}
                </span>
            </div>
            <button
                className="bg-primary rounded-lg w-full py-3 lg:py-1.5 font-bold text-2xl lg:text-lg text-dark disabled:text-opacity-[0.1] disabled:cursor-not-allowed disabled:opacity-[0.2] lg:mt-20"
                disabled={result.tip == 0}
                onClick={() => resetFormFC()}>
                Reset
            </button>
        </section>
    );
};
