export function classNames(mainClass, addon, decider){
    return decider ? `${mainClass} ${mainClass}--${addon}` : mainClass;
};