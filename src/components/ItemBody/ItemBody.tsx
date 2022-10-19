import React, { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import OutputIcon from '@mui/icons-material/Output';

import { TDefaultDate } from '../../types/body';

import { classes } from './ItemBody.styles';

interface IItemBodyProps {
  options: TDefaultDate;
  lastElement: boolean;
}

const ItemBody = ({ options, lastElement }: IItemBodyProps) => {
  return (
    <Box sx={classes.itemList(lastElement, options.imgMain, options.type)}>
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
                  />
                  {position === 'left' && <Box sx={classes.lineOtherItem} />}
                </Box>
                <Box sx={classes.containerTextOtherItem(position)}>
                  <Typography sx={classes.textOtherItem}>
                    {option.text}
                  </Typography>
                </Box>
              </Fragment>
            );
          })}
        </Box>
      )}
      {options.type === 'list' && (
        <Box sx={classes.listItem}>
          <Typography variant="h2" sx={classes.titleListItem}>
            {options.title}
          </Typography>
          <Box sx={classes.elementsListItem}>
            {options.listDate?.map((option) => {
              return (
                <Box
                  key={`container_list_item_${option.id}`}
                  sx={classes.elementListItem}
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
                          {other.otherTitle.map((textTitleOther) => {
                            return (
                              <Typography
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
                        {option.secondTitle.otherTitle.map((textOtherTitle) => {
                          return (
                            <Typography sx={classes.textListItem}>
                              <OutputIcon />
                              {textOtherTitle}
                            </Typography>
                          );
                        })}
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
