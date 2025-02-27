import ThreeModel from "app/components/parts/three-model"
import ScrollComponent from "hooks/use-fadeIn"
import { Suspense } from "react"

export const HomeFvSection = () => {
	return (
		<section className="fv">
			<div className="max_width fv__container">
				<div className="fv__element">
					<h2 className="fv__title slide__in__right">To You Design</h2>
					<h3 className="fv__subtitle slide__in__right">Portfolio</h3>
				</div>
				<div className="fv__element">
					<ScrollComponent>
						<Suspense fallback={<>.</>}>
							<ThreeModel />
						</Suspense>
					</ScrollComponent>
				</div>
			</div>
		</section>
	)
}
