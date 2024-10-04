import Link from 'next/link'

export default function Button(props:{internalText:string,link:string}) {
    return <button className="bg-mainColor rounded-xl px-3 py-2  text-xl border border-mainColor transition-all hover:bg-transparent sm-[700]:mt-12 m-2"><Link href={props.link}>{props.internalText}</Link></button>
}