import { NextPage } from 'next';
import React, { useState } from 'react';
import { ActiveSteps, Button, Input } from '@UI';
import { InputType, useActions, useInput, useTypedSelector } from '@hooks';
import { useRouter } from 'next/router';
import { FileUpload } from '@components';
import s from '@s.pages/tracks/create.module.scss';

const TrackCreate: NextPage = () => {
  const trackNameInput = useInput('', 'Название трека', InputType.TEXT);
  const authorNameInput = useInput('', 'Автор', InputType.TEXT);
  const textInput = useInput('', 'Текст песни', InputType.TEXT);

  const [image, setImage] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);

  const [current, setCurrentStep] = useState(1);
  const { isAuth } = useTypedSelector((state) => state.user);
  const { addTrack } = useActions();
  const router = useRouter();
  const count = 3;

  const nextStep = () => {
    console.log({
      name: trackNameInput.default.value,
      artist: authorNameInput.default.value,
      text: textInput.default.value,
      picture: image,
      audio,
    });

    if (!isAuth) {
      router.push('/login');
    }
    setCurrentStep((prev) => {
      if (prev + 1 > count) return prev;
      return prev + 1;
    });
  };

  const backStep = () => {
    if (!isAuth) {
      router.push('/login');
    }
    setCurrentStep((prev) => {
      if (prev - 1 < 1) return prev;
      return prev - 1;
    });
  };

  const postTrack = () => {
    const redirect = () => {
      router.push('/tracks');
    };

    addTrack(
      {
        name: trackNameInput.default.value,
        artist: authorNameInput.default.value,
        text: textInput.default.value,
        picture: image,
        audio,
      },
      redirect
    );
  };

  return (
    <div className={s.center}>
      <div className={s.width}>
        <div className={s.main}>
          <h1>Загрузка нового трека</h1>
          <div className={s.stepsLength}>
            <ActiveSteps count={count} current={current} />
          </div>
          <div className={s.workplace}>
            {current === 1 && (
              <div className={s.step}>
                <h2>Шаг 1: Название трека</h2>
                <form>
                  <Input
                    defaultParams={trackNameInput.default}
                    icon=""
                    isError={trackNameInput.isError}
                    validError={trackNameInput.validError}
                  />
                  <Input
                    defaultParams={authorNameInput.default}
                    icon=""
                    isError={authorNameInput.isError}
                    validError={authorNameInput.validError}
                  />
                  <Input
                    defaultParams={textInput.default}
                    icon=""
                    isError={textInput.isError}
                    validError={textInput.validError}
                  />
                </form>
              </div>
            )}
            {current === 2 && (
              <div className={s.step}>
                <h2>Шаг 2: Загрузите абложку трека</h2>
                <FileUpload setFile={setImage} accept="image/*">
                  <Button className={s.uploadFile} text="Загрузите обложку" buttonStyle="" />
                </FileUpload>
                {!!image && (
                  <div className={s.file}>
                    <h2>Загружено: {image.name}</h2>
                  </div>
                )}
              </div>
            )}
            {current === 3 && (
              <div className={s.step}>
                <h2>Шаг 3: Загрузите аудиофайл</h2>
                <FileUpload setFile={setAudio} accept="audio/*">
                  <Button className={s.uploadFile} text="Загрузите аудио" buttonStyle="" />
                </FileUpload>
                {!!audio && (
                  <div className={s.file}>
                    <h2>Загружено: {audio.name}</h2>
                  </div>
                )}
              </div>
            )}
          </div>
          {current === 1 && (
            <Button
              disable={!trackNameInput.isValid || !authorNameInput.isValid || !textInput.isValid}
              onClickHandler={nextStep}
              text={'Следующий шаг'}
              buttonStyle="default"
              className={`${s.right} ${s.step}`}
            />
          )}

          {current === 2 && (
            <Button
              disable={!image}
              onClickHandler={nextStep}
              text={'Следующий шаг'}
              buttonStyle="default"
              className={`${s.right} ${s.step}`}
            />
          )}

          {current === count && (
            <Button
              disable={!audio}
              onClickHandler={postTrack}
              text={'Завершить'}
              buttonStyle="default"
              className={`${s.right} ${s.step}`}
            />
          )}

          <Button
            className={`${s.left} ${s.step}`}
            onClickHandler={backStep}
            text={'Назад'}
            buttonStyle="default"
          />
        </div>
      </div>
    </div>
  );
};

export default TrackCreate;
