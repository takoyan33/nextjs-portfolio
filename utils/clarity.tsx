import Script from "next/script"

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export function Clarity() {
	return (
		<Script strategy="afterInteractive" id="clarity-tag">
			{`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");
    `}
		</Script>
	)
}
