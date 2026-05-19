import focoIcon from '../assets/foco.png'
import estrellaIcon from '../assets/estrella.png'
import calendarioIcon from '../assets/calendario.png'
import compartirIcon from '../assets/compartir.png'
import guardaIcon from '../assets/guardar.png'
import regresaIcon from '../assets/regresar.png'
import facebookIcon from '../assets/facebook.png'
import whatsappIcon from '../assets/whats.png'
import copiarIcon from '../assets/copia.png'

export const getIcon = key => {
    const icons = {
        foco:focoIcon,
        estrella: estrellaIcon,
        calendario: calendarioIcon,
        compartir: compartirIcon,
        guardar: guardaIcon,
        regresar: regresaIcon,
        facebook: facebookIcon,
        whatsapp: whatsappIcon,
        copiar: copiarIcon
    };
    return icons[key] || null
}