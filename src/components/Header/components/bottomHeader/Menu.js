import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Shevron from '../../../../assets/icons/header/Vector.svg';
export default function MenuListComposition() {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	const prevOpen = useRef(open);
	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	const [categories, setCategories] = useState('');

	useEffect(() => {
		fetch('https://fakestoreapi.com/products/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<div>
			<Button
				sx={{
					backgroundColor: '#EDA415',
					width: '218px',
					height: '70px',
					color: 'white',
					borderRadius: '0',
					fontFamily: 'Poppins',
					fontSize: '16px',
					fontWeight: '500',
				}}
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? 'composition-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				onClick={handleToggle}
				style={{ textTransform: 'none' }}
			>
				<div style={{ display: 'flex', gap: '5px' }}>
					<p style={{ fontSize: '16px' }}>Browse categories</p>
					<img src={Shevron} alt="#" />
				</div>
			</Button>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement="bottom-start"
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
								>
									{categories.map((item, i) => (
										<MenuItem key={i} onClick={handleClose}>
											{item.toUpperCase()}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
}
