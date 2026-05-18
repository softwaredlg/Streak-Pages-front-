import focoIcon from '../assets/foco.png'
import estrellaIcon from '../assets/estrella.png'
import calendarioIcon from '../assets/calendario.png'
import compartirIcon from '../assets/compartir.png'
import guardaIcon from '../assets/guardar.png'
import regresaIcon from '../assets/regresar.png'

export const getIcon = key => {
    const icons = {
        foco:focoIcon,
        estrella: estrellaIcon,
        calendario: calendarioIcon,
        compartir: compartirIcon,
        guardar: guardaIcon,
        regresar: regresaIcon
    };
    return icons[key] || null
}