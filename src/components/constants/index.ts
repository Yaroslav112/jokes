import { CSSProperties } from 'react';

export const sxButton: CSSProperties = {
    backgroundColor: '#dddddd',
    color: 'black',
};

export const buttonContainer: CSSProperties = {
    position: 'absolute',
    bottom: 5,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
}

export const textContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: 178,
    justifyContent: 'space-around',
}

export const cardHeaderText: CSSProperties = {
    fontSize: 14,
    color: '#3361d5',
    fontWeight: "bold"
}

export const cardContainer: CSSProperties = {
    minWidth: 275,
    height: 260,
    backgroundColor: '#909090',
    position: 'relative',
    borderRadius: "15px",
}

export const colorWhite: CSSProperties = {
    color: '#ffffff',
}

export const listContainer: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
}

export const infoText: CSSProperties = {
    margin: 0,
    fontStyle: "italic",
    fontWeight: 200,
    marginTop: -4,
    color: '#ffffff',
}

export const loadMoreButton: CSSProperties = {
    width: '250px',
    height: '60px',
    color: 'white'
}

export const mainContainer: CSSProperties = {
    backgroundColor: '#d9d9d9',
    paddingBottom: '50px'
}