import React, { Fragment, useLayoutEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import OutputIcon from '@mui/icons-material/Output';

import { TDefaultDate } from '../../types/body';

import { classes } from './ItemBody.styles';

interface IItemBodyProps {
  options: TDefaultDate;
}

const ItemBody = ({ options }: IItemBodyProps) => {
  const isBrowser = typeof window !== 'undefined';
  const [widthWindow, setWidthWindow] = useState(
    isBrowser ? window.innerWidth : 900
  );

  useLayoutEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWidthWindow(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  });
  return (
    <Box
      id={options.href}
      sx={classes.itemList(options.imgMain, options.type, widthWindow)}
    >
      {options.type === 'other' && (
        <Box sx={classes.otherItem}>
          {options.listDate?.map((option, i) => {
            const position = (i + 1) % 2 === 0 ? 'right' : 'left';
            return (
              <Fragment key={`element_body_${options.type}_${option.id}`}>
                <Box sx={classes.elementOtherItem(position)}>
                  {position === 'right' && <Box sx={classes.lineOtherItem} />}
                  <Box
                    component={'img'}
                    src={option.imgLogo}
                    sx={classes.imgOtherItem(position)}
                    title={`image ${option.title}`}
                    alt={`image ${option.title}`}
                  />
                  {position === 'left' && <Box sx={classes.lineOtherItem} />}
                </Box>
                <Box sx={classes.containerTextOtherItem(position)}>
                  <Typography sx={classes.textOtherItem(widthWindow)}>
                    {option.text}
                  </Typography>
                </Box>
              </Fragment>
            );
          })}
        </Box>
      )}
      {options.type === 'list' && (
        <Box sx={classes.listItem(widthWindow)}>
          <Typography variant="h3" sx={classes.titleListItem(widthWindow)}>
            {options.title}
          </Typography>
          <Box sx={classes.elementsListItem}>
            {options.listDate?.map((option) => {
              return (
                <Box
                  key={`container_list_item_${option.id}`}
                  sx={classes.elementListItem(widthWindow)}
                >
                  <Typography sx={classes.titleElementListItem}>
                    {option.title}
                  </Typography>
                  <Box>
                    {option.listOther?.map((other) => {
                      return (
                        <Fragment key={`text_list_item_${other.id}`}>
                          <Typography sx={classes.textListItem}>
                            <OutputIcon />
                            {other.title}
                          </Typography>
                          {other.otherTitle.map((textTitleOther, i) => {
                            return (
                              <Typography
                                key={`text_title_other_${i + 1}`}
                                sx={{
                                  ...classes.textListItem,
                                  padding: '5px 0 0 25px',
                                }}
                              >
                                {textTitleOther}
                              </Typography>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    {option.secondTitle && (
                      <Fragment>
                        <Typography sx={classes.secondTitle}>
                          {option.secondTitle.title}
                        </Typography>
                        {option.secondTitle.otherTitle.map(
                          (textOtherTitle, i) => {
                            return (
                              <Typography
                                key={`text_other_title_${i + 1}`}
                                sx={classes.textListItem}
                              >
                                <OutputIcon />
                                {textOtherTitle}
                              </Typography>
                            );
                          }
                        )}
                      </Fragment>
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ItemBody;
