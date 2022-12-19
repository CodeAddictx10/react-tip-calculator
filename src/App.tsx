import { useState } from "react";
import logo from "./assets/images/logo.svg";
import Result from "./components/Result";
import TipForm from "./components/TipForm";

function App() {
    const [isResetForm, setIsResetForm] = useState<boolean>(false);
    const [result, setResult] = useState<{ tip: number; total: number }>({
        tip: 0.0,
        total: 0.0,
    });
    return (
        <>
            <main className="lg:container lg:flex flex-col items-center justify-center min:h-screen h-screen py-16 lg:py-0">
                <header className="flex justify-center mb-16">
                    <img src={logo} alt="splitter logo" />
                </header>
                <section className="bg-white h-screen lg:h-fit border-2 border-white px-8 pt-8 pb-10 rounded-t-3xl lg:rounded-lg lg:grid lg:grid-cols-2 lg:gap-x-14 lg:w-[900px] shadow-sm drop-shadow-2xl">
                    <TipForm
                        setResultFC={(result: { tip: number; total: number }) =>
                            setResult(result)
                        }
                        isResetForm={isResetForm}
                    />
                    <Result
                        result={result}
                        resetFormFC={() => {
                            setIsResetForm(!isResetForm);
                        }}
                    />
                </section>
            </main>
        </>
    );
}

export default App;
