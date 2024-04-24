import Image from "next/image"
import type { ServicePropsTyping } from '@/typings';
import layout from '@/styles/_modules/Layout.module.scss'
import services from '@/styles/_modules/Services.module.scss';
import button from '@/styles/_modules/Button.module.scss'
import image from '@/styles/_modules/Image.module.scss'

export default function Service({
    title,
    imageSrc,
    imageAlt,
    content,
    contentAdd,
    buttonText,
    isBadImage,
}: ServicePropsTyping): JSX.Element {
    return (
        <article className={`
            ${layout.page_section}
            ${services.general}
        `}>
            <header>
                <h1>{title}</h1>
            </header>

            <figure>
                <picture className={services.image_container}>
                    <Image
                        className={isBadImage ? image.bad_image : ''}
                        src={imageSrc}
                        alt={imageAlt}
                        width={400}
                        height={400}
                        style={{ maxWidth: '70%', height: '100%' }}
                    />
                </picture>

                <figcaption>
                    <p>{content}</p>
                    <p>{contentAdd}</p>
                    
                    <button
                        type="button"
                        className={`
                            ${button.general}
                            ${button.transparent}
                        `}
                    >
                        {buttonText}
                    </button>
                </figcaption>
            </figure>
        </article>
    )
}
