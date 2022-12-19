import React, { useState, useId, useEffect } from "react";
import iconDollar from "../assets/images/icon-dollar.svg";
import iconPerson from "../assets/images/icon-person.svg";
const amountList = [5, 10, 15, 25, 50];
const TipForm = ({
    setResultFC,
    isResetForm,
}: {
    setResultFC: Function;
    isResetForm: boolean;
}) => {
    const [form, setForm] = useState<{
        bill: number | string;
        tip: number | string;
        people: number | string;
    }>({ bill: "", tip: "", people: "" });
    const [errorBag, setErrorBag] = useState<{
        bill: boolean;
        tip: boolean;
        people: boolean;
    }>({ bill: false, tip: false, people: false });

    const setFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name;
        let value: number | string = Number(event.target.value);
        if (value === 0 || isNaN(value)) {
            value === 0 && setErrorBag({ ...errorBag, [name]: true });
            value = "";
        }
        setForm({ ...form, [name]: value });
        if (errorBag.bill || errorBag.people || errorBag.tip) {
            setErrorBag({ ...errorBag, [name]: Number(value) === 0 });
        }
    };
    useEffect(() => {
        setForm({ bill: "", tip: "", people: "" });
        setResultFC({
            tip: 0.0,
            total: 0.0,
        });
    }, [isResetForm]);

    const tipCalculatorHandler = (
        bill: number,
        tip: number,
        people: number,
    ) => {
        if (bill === 0 || tip === 0 || people === 0) {
            return;
        }
        const totalTip = bill * (tip / 100);
        setResultFC({
            tip: totalTip.toFixed(2),
            total: (bill + Number(totalTip) * people).toFixed(2),
        });
        return;
    };

    return (
        <form className="space-y-10">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="bill" className="customLabel">
                        Bill
                    </label>
                    {errorBag.bill && (
                        <span className="invalid">Can&#39;t be zero</span>
                    )}
                </div>

                <div className="relative w-full">
                    <span role="icon" className="absolute top-4 left-4">
                        <img
                            src={iconDollar}
                            alt="input icon"
                            className="w-2.5"
                        />
                    </span>
                    <input
                        type="number"
                        placeholder="0"
                        className={`input border-2 ${
                            errorBag.bill &&
                            "border-invalid focus:border-invalid"
                        }`}
                        name="bill"
                        id="bill"
                        value={form.bill}
                        onBlur={() =>
                            tipCalculatorHandler(
                                +form.bill,
                                +form.tip,
                                +form.people,
                            )
                        }
                        onChange={(event) => setFormInput(event)}
                    />
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <span className="customLabel">Select Tip &#37;</span>
                <div
                    role="select"
                    className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* <CustomSelectBox
                        amountList={[5, 10, 15, 25, 50]}
                        amount={Number(form.tip)}
                        setTipFC={(tip: number) => {
                            setForm({ ...form, tip });
                        }}
                    /> */}

                    <>
                        {amountList.map((amount, index) => {
                            return (
                                <React.Fragment key={`tip-${index}`}>
                                    <input
                                        type="radio"
                                        id={`tip-${index}`}
                                        name="tip"
                                        checked={form.tip === amount}
                                        value={form.tip}
                                        className="hidden peer"
                                        required
                                        onChange={() =>
                                            setForm({ ...form, tip: amount })
                                        }
                                    />
                                    <label
                                        htmlFor={`tip-${index}`}
                                        onMouseLeave={() =>
                                            tipCalculatorHandler(
                                                +form.bill,
                                                +form.tip,
                                                +form.people,
                                            )
                                        }
                                        className={`option py-3 lg:py-1 ${
                                            amount === form.tip &&
                                            "bg-primary text-[#000]"
                                        }`}>
                                        {amount}&#37;
                                    </label>
                                </React.Fragment>
                            );
                        })}
                    </>

                    <input
                        type="number"
                        className={`w-full option cursor-text focus-visible:outline-none bg-lighter-grayish-cyan placeholder:text-light-grayish-cyan placeholder:text-center text-very-dark-cyan focus:border-2  text-right px-3  ${
                            errorBag.tip
                                ? " border-invalid focus:border-invalid"
                                : "focus:border-primary"
                        }`}
                        placeholder="Custom"
                        name="tip"
                        onMouseLeave={() =>
                            tipCalculatorHandler(
                                +form.bill,
                                +form.tip,
                                +form.people,
                            )
                        }
                        onChange={(event) => setFormInput(event)}
                    />
                </div>
            </div>

            <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                    <label htmlFor="people" className="customLabel">
                        Number of People
                    </label>
                    {errorBag.people && (
                        <span className="invalid">Can&#39;t be zero</span>
                    )}
                </div>

                <div className="relative w-full">
                    <span role="icon" className="absolute top-4 left-4">
                        <img
                            src={iconPerson}
                            alt="input icon"
                            className="w-2.5"
                        />
                    </span>
                    <input
                        type="text"
                        pattern="[0-9]"
                        placeholder="0"
                        className={`input border-2 ${
                            errorBag.people &&
                            "border-invalid focus:border-invalid"
                        }`}
                        name="people"
                        onBlur={() =>
                            tipCalculatorHandler(
                                +form.bill,
                                +form.tip,
                                +form.people,
                            )
                        }
                        value={form.people}
                        onChange={(event) => setFormInput(event)}
                        id="people"
                    />
                </div>
            </div>
        </form>
    );
};

// const CustomSelectBox = ({
//     amount,
//     amountList,
//     setTipFC,
// }: {
//     amount: number;
//     amountList: number[];
//     setTipFC: Function;
// }): JSX.Element => {
//     const setTipHandler = (amount: number) => {
//         setTipFC(amount);
//     };
//     return (
//             {
//                 amountList.map((item) => {
//                 let id = useId();
//                 {/* <span
//                     role="option"
//                     className={`option py-3 lg:py-1 ${
//                         amount === item && "bg-primary text-[#000]"
//                     }`}
//                     key={id}
//                     onClick={() => setTipHandler(item)}>
//                     {item}&#37;
//                 </span> */}
//                 {/*

//

//             );
//             };
// };
export default TipForm;
