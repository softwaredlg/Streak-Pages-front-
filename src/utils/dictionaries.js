import focoIcon from '../assets/foco.png'
import estrellaIcon from '../assets/estrella.png'
export const getIcon = key => {
    const icons = {
        foco:focoIcon,
        estrella: estrellaIcon
    };
    return icons[key] || null
}