import { format, parseISO } from "date-fns";
import React from "react";

export default function EditDate({ dateString }) {
	const date = parseISO(dateString);
	return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
