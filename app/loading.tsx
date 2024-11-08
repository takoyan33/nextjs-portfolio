import React from "react";
import { PATH } from "../utils/path";
import BreadList from "./components/ui/BreadList";

const Loading = () => {
	return (
		<div className="loading-body">
			<div className="max_width">
				<BreadList name="Blog" link={PATH.BLOG} />
			</div>
			<div className="lower_bg">
				<div className="max_width">
					<h2 className="lower__title" data-ja="Loading">
						Loading
					</h2>
				</div>
			</div>
			<div className="loading">
				<div className="spinner-box">
					<div className="circle-border">
						<div className="circle-core" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
