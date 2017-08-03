import 'react-sticky-header';
import StickyHeader from 'react-sticky-header';
import React from 'react';

const MyHeader = () => (
	<StickyHeader
		header={
			<div className="Header_root">
				<h1 className="Header_title">Lanscape</h1>

				<ul className="Header_links">
					<li className="Header_link">Toolshed</li>
					<li className="Header_link">Invoices</li>
					<li className="Header_link">Quote</li>
				</ul>
			</div>
		}
		>
			<section>
				{/*Section that header will scroll over before it becomes"sticky"*/}
			</section>
		</StickyHeader>
	);
module.exports = MyHeader;