import React, { useEffect } from 'react'
import Chart from '../components/chartTrader'
import Nav from '../components/nav'
import Statistics from '../components/statistics'
import Reviews from '../components/reviewsTrader'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux'
import { useParams } from 'react-router-dom'
import NotAvailable from './NotAvailable'
import DashBoardSkelton from '../components/Skeleton/DashBoardSkelton'

function TraderDashboard() {
  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const isLoadingUser = useSelector((state) => state.isLoadingUser)
  useEffect(() => {
    dispatch(actions.showBell(true))
  }, [])
  return (
    <div>
      <Nav />
      {isLoadingUser?<DashBoardSkelton/>:( !user ||
    (user && user._id !== params.id) )?<NotAvailable />:<>
     <Chart />
      <Statistics />
      <Reviews />
    </>}
     
    </div>
  )
}

export default TraderDashboard
