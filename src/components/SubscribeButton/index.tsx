import styles from './styles.module.scss'
import {signIn, useSession} from "next-auth/react";
import {api} from "../../services/api";
import {getStripeJs} from "../../services/stripe-js";

interface SubscribeButtonProps {
  priceId: string
}

const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
  const {data: session} = useSession()


  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout(sessionId)
    } catch (e) {
      console.error(e)
    }
  }

  return(
    <button onClick={() => handleSubscribe()} type='button' className={styles.subscribeButton}>Subscribe Now</button>
  )
}

export default SubscribeButton