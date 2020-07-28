import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addCar } from '../../store/cars';
import { showMessage, hideMessage } from '../../store/layout';

const INITIAL_STATE = {
	name: '',
	url: ''
}

export default function Add() {
	const [form, setForm] = useState(INITIAL_STATE);
	const dispath = useDispatch();

	function handleChange(e)  {
		const { name, value } = e.target;
		setForm(form => ({ ...form, ...{ [name]: value } }));
	};

	function handleSubmit(e) {
		e.preventDefault();
		dispath(addCar(form));
		setForm(INITIAL_STATE);
		dispath(showMessage());

		setTimeout(() => {
			dispath(hideMessage())
		}, 1000);
	}

	return (
		<form className="container mt-5" onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Nome</label>
				<input onChange={handleChange} type="text" name="name" className="form-control" placeholder="Nome..." value={form.name} />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={handleChange} type="text" name="url" className="form-control" placeholder="URL:https://cars" value={form.url} />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
