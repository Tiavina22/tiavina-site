import { ComponentPropsWithRef } from "react"

export const FlutterLogo = (props: ComponentPropsWithRef<"svg"> &  {size?: number}) => {
    return (
        
<svg width={props.size} height={props.size} viewBox="0 0 256 250" version="1.1"  preserveAspectRatio="xMidYMid" {...props}>

		<g>
				<polygon fill="#47C5FB" points="157.665785 0.000549356223 0.000549356223 157.665785 48.8009614 206.466197 255.267708 0.000549356223"></polygon>
				<polygon fill="#47C5FB" points="156.567183 145.396793 72.1487107 229.815265 121.132608 279.530905 169.842925 230.820587 255.267818 145.396793"></polygon>
				<polygon fill="#00569E" points="121.133047 279.531124 158.214592 316.61267 255.267159 316.61267 169.842266 230.820807"></polygon>
				<polygon fill="#00B5F8" points="71.5995742 230.364072 120.401085 181.562561 169.842046 230.821136 121.132827 279.531454"></polygon>
				<polygon fill-opacity="0.8" fill="url(#linearGradient-1)" points="121.132827 279.531454 161.692896 266.072227 165.721875 234.941308"></polygon>
		</g>
</svg>
    )
}





