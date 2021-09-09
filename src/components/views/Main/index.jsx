import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/productReducer'
import Header from '../../Header'
import Sidebar from '../../Sidebar'
import Card from '../../Card'
import { Link } from 'react-router-dom'
import './style.css'

const MainLayout = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(''))
	},[]);

	const products = useSelector((state) => state.products.results)

	console.log('THIS IS PRODUCTS: ', products)

	return (
		<>
		<div className='wrapper'>
		<Header/>
		<div className='container main_layout'>
			<Sidebar/>
			<div className='products_grid'>
				{/* <Link>Mapeo de las zapatillas en Card</Link> */}
				{products.map((product) => {
					return <Card key={product.id} product={product}/>
				})}
			</div>
		</div>
		</div>
		</>
	)
}

export default MainLayout