import { useEffect, useState } from 'react'
import QuoteData from './data.json'
import ColorData from './colors.json'
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
export default function Quote() {
    const [quote, setQuote] = useState({})
    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        actionRandom()
    }, [])

    function actionRandom() {
        const dataLength = QuoteData.length
        const idRandom = Math.floor(Math.random() * dataLength) + 1
        setQuote(QuoteData.find(item => item.id === idRandom))
        setBgColor(ColorData.find(item => item.id === idRandom))
    }

    return (
        <div className="flex h-screen w-screen justify-center items-center content-center overflow-hidden transition-all duration-1000" style={{ backgroundColor: bgColor.color }}>
            <div className='w-[770px] h-[400px] rounded-3xl flex-col relative' id="quote-box" >
                <BiSolidQuoteSingleRight className='absolute top-[-80%] left-[-50px] w-[90vh] h-[90vh] scale-x-[-1] z-10 text-black/30' />
                <BiSolidQuoteSingleRight className='absolute top-[-90%] right-[-0%] w-[80vh] h-[80vh] z-10 text-white' />
                <div className='relative flex flex-col w-full z-20 h-[300px]'>
                    <div className='relative font-thin text-right p-8 h-[300px] content-end'>
                        <span id="text" className='text-4xl tracking-wide leading-relaxed transition-all duration-1000' style={{ color: bgColor ? bgColor.color : "black" }}>
                            {quote.quote}
                        </span>
                        <div className='w-full flex justify-end py-4'>
                            <span id="author" className='text-white font-thin text-xl'>- {quote.author}</span>
                        </div>
                        <div className='flex justify-between content-end'>
                            <a href={`https://twitter.com/intent/tweet?text=${quote.quote}`} target="_blank" rel="noopener noreferrer" id="tweet-quote">
                                <FaTwitter className='w-10 h-10 text-white  bg-black p-2 rounded-md transition-all duration-1000' style={{ background: bgColor ? bgColor.color : "black" }} />
                            </a>
                            <button onClick={() => actionRandom()} className='text-white p-3 rounded-2xl transition-all duration-1000' style={{ background: bgColor ? bgColor.color : "black" }} id="new-quote">New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}