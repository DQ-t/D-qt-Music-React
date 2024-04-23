import Image from "next/image";
import layouts from '@/styles/_modules/Layout.module.scss'

export default function PageBackground() {
    return (
        <div className={layouts.page_background}>
            <Image
                src="/home_1.JPG"
                alt="Page background picture"
                fill
            />
        </div>
    )
}
