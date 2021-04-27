import React from 'react'
import Loader from 'react-loader-spinner'


const Spiner = () => {
	return (<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'60vh'}}>
		<Loader
			type='Circles'
			color='#c22523'
			height={100}
			width={100}
			 //3 secs
		/>
        </div>
	)
}

export default Spiner
