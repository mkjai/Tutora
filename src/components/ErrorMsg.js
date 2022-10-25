
import { VscError } from "react-icons/vsc";

import { useAuth } from "../AuthContext";

export default function ErrorMsg() {
  const { error, setError } = useAuth();

    const STYLES = {
        position: 'fixed',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#DC143C',
        padding: '2rem',
        borderRadius: '5px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        flexDirection: 'row',
        width: '30rem',
        fontSize: '2rem',
        gap: '1rem'
    }
    const COLOR = {color: "#fff"}


  return (
    error && (
        <div>
                <div style = {STYLES}>
                    <VscError
                        onClick = {() => setError("")}
                        aria-hidden = "true"
                        size = {20}
                        style = {COLOR}
                    />
                    <h3 style = {COLOR}>
                    Error: {error}
                    </h3>
                </div>
            </div>
    )
  );
}