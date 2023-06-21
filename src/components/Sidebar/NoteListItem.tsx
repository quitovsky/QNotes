import React from "react";

interface NoteListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    isFavorite: boolean;
    isSelected: boolean;
    onFavoriteClick?: () => void;
}

export default function NoteListItem({name, isFavorite, isSelected, onFavoriteClick, ...props}: NoteListItemProps) {
    return(
        <>
        <div {...props} className={`sidebar-list-item ${isSelected ? 'selected' : ''} ${isFavorite ? 'favorite' : ''}`}>
            <div className={`sidebar-list-item-name`}>{name}</div>
            <div className="sidebar-list-item-favorite" onClick={onFavoriteClick}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4_125)">
                        <path d="M1.42453 11.775C1.69755 11.8917 1.9994 11.9234 2.2907 11.8659C2.582 11.8085 2.84923 11.6646 3.05753 11.453L6.00003 8.5265L8.94253 11.453C9.07973 11.5922 9.24317 11.7028 9.4234 11.7784C9.60364 11.854 9.79708 11.8932 9.99253 11.8935C10.1934 11.8929 10.3922 11.8526 10.5775 11.775C10.8528 11.6636 11.0881 11.4718 11.2526 11.2246C11.4172 10.9775 11.5034 10.6864 11.5 10.3895V2.5C11.4992 1.8372 11.2356 1.20178 10.7669 0.73311C10.2982 0.264441 9.66282 0.000793929 9.00003 0L3.00003 0C2.33723 0.000793929 1.70181 0.264441 1.23314 0.73311C0.764467 1.20178 0.50082 1.8372 0.500026 2.5V10.3895C0.496799 10.6867 0.583314 10.9779 0.748258 11.2251C0.913201 11.4723 1.1489 11.6639 1.42453 11.775Z" fill="#E1A60D"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4_125">
                            <rect width="12" height="12" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
        </>
    )
}