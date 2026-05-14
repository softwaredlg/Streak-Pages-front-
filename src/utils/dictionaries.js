import focoIcon from '../assets/foco.png'
export const getIcon = key => {
    const icons = {
        foco:focoIcon
    };
    return icons[key] || null
}